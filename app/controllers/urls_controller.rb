require 'csv'    

class UrlsController < ApplicationController
  before_action :load_url, only: %i[ update]

  def index
    urls = Url.all
    respond_to do |format|
      format.html {render status: :ok, json:  urls.organize()}
      format.csv { send_data urls.to_csv, filename: "urls-#{Date.today}.csv" }
    end   
  end

  def create
    hash = generate_hash(url_params[:url])
    url = Url.new(url_params.merge(shortened: hash))
    if url.save
      render status: :ok, json: {notice: "URL shortened"}
    else
      render status: :unprocessable_entity,
             json: { error: url.errors.full_messages.to_sentence }
    end
  end

  def update
    if @url.update(url_params)
      render status: :ok, json: {}
    else
      render status: :unprocessable_entity,
             json: { error: @url.errors.full_messages.to_sentence }
    end
  end

  private 

  def url_params    
    params.require(:url).permit(:url, :status )
  end

  def load_url
    @url = Url.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { error: e }, status: :not_found
  end

  def generate_hash(string)
    index = 0
    while index <= 58 do
      hash = (Digest::SHA256.hexdigest string)[index,6]
      return hash unless Url.find_by(shortened: hash)
      index += 6 
    end       
  end
end
