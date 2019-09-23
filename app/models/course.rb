class Course < ApplicationRecord
  belongs_to :user
  has_many :assignments, dependent: :destroy

  validates :name, presence: true
  validates :description, presence: true
end
