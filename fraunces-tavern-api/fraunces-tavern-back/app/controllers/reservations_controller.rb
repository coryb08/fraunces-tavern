class ReservationsController < ApplicationController
  def index

    @reservations = Reservation.all
    render json: @reservations
  end

  def create
    @reservation = Reservation.new(reservation_params)
    # user = User.all.find{|i| i.id === @reservation.userId}
    # @reservation.user_id = user
    if @reservation.save

      render json: @reservation
    else
      render json: {errors: @reservation.errors.full_messages}
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
  end

  private
  def reservation_params
    params.require(:reservation).permit(:date, :time, :notes, :user_id)
  end
end
