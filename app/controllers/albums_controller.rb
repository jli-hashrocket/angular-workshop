class AlbumsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @albums = Album.all.to_json
    respond_to do |format|
      format.html
      format.json { render json: {message: 'success', albums: @albums }}
    end
  end

  def add_album
    @new_album = Album.create(artist: params[:name], album: params[:album])
    render json: {message: 'success', album: @new_album}
  end
end
