class Url < ApplicationRecord
  enum status: { unpinned: 0, pinned: 1 }

  validates :url, presence: true,  format: { with: URI.regexp }
  validates :shortened, presence: true

  private

  def self.to_csv
    attributes = %w{url shortened clicks}
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
