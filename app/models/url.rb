class Url < ApplicationRecord
  validates :original, presence: true
  validates :shortened, presence: true
  enum status: { unpinned: 0, pinned: 1 }
end
