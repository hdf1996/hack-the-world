class Interaction < ApplicationRecord
  enum type_content: { image: 0, text: 1 }
  enum type_interaction: { creation: 0, like: 1, share: 2, comment: 3 }
end
