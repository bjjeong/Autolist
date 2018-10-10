# == Schema Information
#
# Table name: vehicles
#
#  id         :bigint(8)        not null, primary key
#  vin        :string           not null
#  views      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Vehicle < ApplicationRecord
  validates :vin, :views, presence: true
  validates :vin, uniqueness: true
end
