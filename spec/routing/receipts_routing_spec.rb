require "rails_helper"

RSpec.describe ReceiptsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/receipts").to route_to("receipts#index")
    end

    it "routes to #show" do
      expect(get: "/receipts/1").to route_to("receipts#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/receipts").to route_to("receipts#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/receipts/1").to route_to("receipts#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/receipts/1").to route_to("receipts#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/receipts/1").to route_to("receipts#destroy", id: "1")
    end
  end
end
