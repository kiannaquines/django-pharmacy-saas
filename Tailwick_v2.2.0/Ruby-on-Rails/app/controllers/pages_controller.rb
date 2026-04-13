class PagesController < ApplicationController
  layout :choose_layout

  def choose_layout
  action_name.in?(%w[coming_soon maintenance error_404 offline]) ? "base" : "vertical"
  end
  
  def pricing
  end

  def faqs
  end

  def coming_soon
  end

  def maintenance
  end

  def timeline
  end

  def error_404
  end

  def starter
  end

  def offline
  end
end
    