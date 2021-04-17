class Url < ApplicationRecord
  validates :original, presence: true
  validates :shortened, presence: true
  enum status: { unpinned: 0, pinned: 1 }

  private
  def self.to_csv
    attributes = %w{original shortened clicks}

    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |url|
        csv << attributes.map{ |attr| url.send(attr) }
      end
    end
  end

  def self.organize
    pinned = self.pinned.order('updated_at DESC')
    unpinned = self.unpinned.order('updated_at DESC')
    pinned + unpinned
  end
end
