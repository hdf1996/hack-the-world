class Pub < ApplicationRecord
  has_one :hashtag
  
  def as_json obj={}
    {
      id: id,
      name: name,
      hashtag: hashtag.name,
      goal_completed: hashtag.goal_completed, 
      telephone: telephone,
      direction: direction,
      latitude: latitude,
      longitude: longitude
    }
  end
end
