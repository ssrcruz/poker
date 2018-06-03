module HomeHelper
  def open
    hands = []
    path = Rails.root.join("app/helpers/pokerHands.txt")
    File.open(path, "r") do |f|
      f.each_line do |line|
        hands << line
      end
    end
    hands
  end
end
