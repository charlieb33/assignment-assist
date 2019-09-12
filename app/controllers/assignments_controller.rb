class AssignmentsController < ApplicationController
  # before_action: :set_assignment, only: %i[show update destroy]

  def index
    @user = User.find(params[:user_id])
    @course = Course.where(user_id: @user.id).find(params[:course_id])
    @assignments = Assignment.where(course_id: @course.id)
    render json: @assignments, status: :ok
  end

  def show
    begin
      @user = User.find(params[:user_id])
      @course = Course.where(user_id: @user.id).find(params[:course_id])
      @assignment = Assignment.where(course_id: @course.id).find(params[:id])
      render json: @assignment, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { message: 'assignment not found' }, status: 404
    rescue StandardError => e
      render json: { message: e.to_s }, status: 500
    end
  end

  def create
    @user = User.find(params[:user_id])
    @course = Course.where(user_id: @user.id).find(params[:course_id])
    @assignment = Assignment.where(course_id: @course.id).new(assignment_params)
    if @assignment.save
      render json: @assignment, status: :created
    else
      render json: @assignment.errors, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:user_id])
    @course = Course.where(user_id: @user.id).find(params[:course_id])
    @assignment = Assignment.where(course_id: @course.id).find(params[:id])
    if @assignment.update(assignment_params)
      render json: @assignment, status: :ok
    else
      render json: @assignment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @course = Course.where(user_id: @user.id).find(params[:id])
    @assignment = Assignment.where(course_id: @course.id).find(params[:id])
    @assignment.destroy
  end

  private

  def assignment_params
    params.permit(:name, :description, :due_date)
  end
end