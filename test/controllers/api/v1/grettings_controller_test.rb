require 'test_helper'

class Api::V1::GrettingsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get api_v1_grettings_index_url
    assert_response :success
  end
end
