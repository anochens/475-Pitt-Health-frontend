class EntriesController < ApplicationController
  
  USER_ID, PASSWORD = "healthcare", "password"

     before_filter :authenticate
     
  def index
    @entries = Entry.all
  end

  def show
    @entry = Entry.find(params[:id])
  end

  def new
    @entry = Entry.new
  end

  def create
    @entry = Entry.new(params[:entry])
    if @entry.save
      redirect_to @entry, :notice => "Successfully created entry."
    else
      render :action => 'new'
    end
  end

  def edit
    @entry = Entry.find(params[:id])
  end

  def update
    @entry = Entry.find(params[:id])
    if @entry.update_attributes(params[:entry])
      redirect_to @entry, :notice  => "Successfully updated entry."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy
    redirect_to entries_url
  end

  def write
	 j = ActiveSupport::JSON

	 arr = []
	 Entry.all.each{|e|
		 json = j.decode(e.json_blob)
		 json['pk'] = e.id
		 json['type'] = e.entry_type

		 # change fields like field[]='1,2' to field=[1,2]
	    Entry::MULTI_FIELDS.each{|f|
			 if json.include? "#{f}[]" 
				 json["#{f}[]"] = json["#{f}[]"].split(",").map{|i| i.to_i}
				 json[f] = json["#{f}[]"]  
				 json.delete "#{f}[]"
			 end   
		 }

	    Entry::INTEGER_FIELDS.each{|f|
			 json[f] = json[f].to_i if json.include? f
		 }
		 arr << json
	 }
	 json_string = j.encode(arr)

  	 render :text => json_string;
  end   
  
  private
     def authenticate
        authenticate_or_request_with_http_basic do |id, password|
            password == PASSWORD
        end
     end
end
