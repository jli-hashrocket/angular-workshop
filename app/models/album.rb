class Album < ActiveRecord::Base
  validates_presence_of :artist
  validates_presence_of :album
end
