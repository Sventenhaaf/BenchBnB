
class Api::BenchesController < ApplicationController

  def create
  end
  def index
    # debugger;
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end
end
