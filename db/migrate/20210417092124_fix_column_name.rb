class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :urls, :original, :url
  end
end
