class ChangeScoreToFloat < ActiveRecord::Migration[5.2]
  def change
  	change_column :scores, :score, :float
  end
end
