class CreateContents < ActiveRecord::Migration[5.0]
  def change
    create_table :contents do |t|
      t.string     :image_url
      t.integer    :price
      t.text       :comment
      
      t.timestamps
    end
  end
end
