class CoursesController < ApplicationController
  # before_action: :set_course, only: %i[show update destroy]

  def index
    @user = User.find(params[:user_id])
    @courses = Course.where(user_id: @user.id)
    render json: @courses, status: :ok
  end

  def show
    begin
      @user = User.find(params[:user_id])
      @course = Course.where(user_id: @user.id).find(params[:id])
      render json: @course, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { message: 'course not found' }, status: 404
    rescue StandardError => e
      render json: { message: e.to_s }, status: 500
    end
  end

  def create
    @user = User.find(params[:user_id])
    @course = Course.where(user_id: @user.id).new(course_params)
    if @course.save
      render json: @course, status: :created
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:user_id])
    @course = Course.where(user_id: @user.id).find(params[:id])
    if @course.update(course_params)
      render json: @course, status: :ok
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @course = Course.where(user_id: @user.id).find(params[:id])
    @course.destroy
  end

  private

  def course_params
    params.permit(:name, :description)
  end
end
