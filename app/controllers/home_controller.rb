class HomeController < ApplicationController
  before_action :load_url_by_shortened, only: :show
  def index 
    render
  end
  def show
    if @url.present?
      @url.increment!(:clicks)
      redirect_to @url.original
    end
  end

  private
    def load_url_by_shortened
      @url = Url.find_by(shortened: params[:id])
    end
end
