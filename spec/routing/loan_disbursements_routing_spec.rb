require "rails_helper"

RSpec.describe LoanDisbursementsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/loan_disbursements").to route_to("loan_disbursements#index")
    end

    it "routes to #show" do
      expect(get: "/loan_disbursements/1").to route_to("loan_disbursements#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/loan_disbursements").to route_to("loan_disbursements#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/loan_disbursements/1").to route_to("loan_disbursements#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/loan_disbursements/1").to route_to("loan_disbursements#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/loan_disbursements/1").to route_to("loan_disbursements#destroy", id: "1")
    end
  end
end
