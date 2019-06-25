class Score < ApplicationRecord
	validates_presence_of :user, :score
end
