# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.create([
  {
    description: 'app Academy',
    lat: 37.7833,
    lng: -122.4167
  },
  {
    description: 'SomethingSomething',
    lat: 37.7822,
    lng: -122.4154
  }
]

)
