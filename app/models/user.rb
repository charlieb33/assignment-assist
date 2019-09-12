class User < ApplicationRecord
    has_many :courses, dependent: :destroy
    has_many :assignments, through: :courses
end
