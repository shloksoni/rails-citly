require "test_helper"

class UrlTest < ActiveSupport::TestCase
  def setup
    @url = Url.new(url: "htp://www.google.com", shortened: "123456")
  end

  def test_url_is_valid
    assert @url.valid?
  end
  
  def test_url_is_invalid
    @url.url = "www.google.com"
    assert @url.invalid?
  end

  def test_shorterned_url_length_is_6
    @url.shortened = "abcde"
    assert @url.invalid?
  end
end
