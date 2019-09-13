class AssignmentsController < ApplicationController
  before_action :set_assignment, only: %i[show update destroy]

  def index
    @user = User.find(params[:user_id])
    @course = Course.where(user_id: @user.id).find(params[:course_id])
    @assignments = Assignment.where(course_id: @course.id)
    render json: @assignments, status: :ok
  end

  def show
    begin
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
    if @assignment.update(assignment_params)
      render json: @assignment, status: :ok
    else
      render json: @assignment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @assignment.destroy
  end

  private

  def set_assignment
    @user = User.find(params[:user_id])
    @course = Course.where(user_id: @user.id).find(params[:course_id])
    @assignment = Assignment.where(course_id: @course.id).find(params[:id])
  end

  def assignment_params
    params.permit(:name, :description, :due_date)
  end
end