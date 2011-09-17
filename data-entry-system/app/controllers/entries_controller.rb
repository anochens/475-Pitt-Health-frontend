class EntriesController < ApplicationController
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
    redirect_to entries_url, :notice => "Successfully destroyed entry."
  end

  def write
	 j = ActiveSupport::JSON

	 arr = []
	 Entry.all.each{|e|
		 json = j.decode(e.json_blob)
		 json['pk'] = e.id
		 json['type'] = e.entry_type

       if json.include? 'items[]' 
			 json['items[]'] = json['items[]'].split(",").map{|i| i.to_i}
		 	 json['items'] = json['items[]']  
			 json.delete 'items[]'
		 end   

		 json['prev'] = json['prev'].to_i if json.include? 'prev'
		 arr << json
	 }
	 json_string = j.encode(arr)
  	 render :text => json_string;
  end   
end
