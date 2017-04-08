class Hashtag < ApplicationRecord
  belongs_to :pub
  has_many :interactions

  def goal_completed
    points / goal.to_f
  end

  def points
    interactions.count * 100 + interactions.sum(:amount) * 25
  end
end
