class Hashtag < ApplicationRecord
  belongs_to :pub
  has_many :interactions
  has_many :subevents

  def goal_completed
    points / goal.to_f
  end

  def points
    interactions.count * 100 + interactions.sum(:amount) * 25
  end
end
