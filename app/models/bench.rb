
class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    benches = Bench.all
    result = [];
    benches.each do |bench|
      result << bench if  bench.lat < bounds["northEast"]["lat"].to_f &&
                          bench.lat > bounds["southWest"]["lat"].to_f &&
                          bench.lng < bounds["northEast"]["lng"].to_f &&
                          bench.lng > bounds["southWest"]["lng"].to_f
    end
    result
  end

end
