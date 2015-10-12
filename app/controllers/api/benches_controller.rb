class Api::BenchesController < ApplicationController
  def create
  end
  def index
    @benches = Bench.all
    render :index
  end
end
