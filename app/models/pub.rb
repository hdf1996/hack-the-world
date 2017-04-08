class Pub < ApplicationRecord
  has_one :hashtag
  
  def as_json obj={}
    {
      id: id,
      name: name,
      hashtag: hashtag.name
    }
  end
end
