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

require 'test_helper'

class VehicleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
