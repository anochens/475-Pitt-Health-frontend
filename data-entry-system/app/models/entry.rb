class Entry < ActiveRecord::Base
  attr_accessible :entry_type, :json_blob

  ENTRY_MENU = 'MENU'
  ENTRY_ITEM = 'ITEM'
  ENTRY_ENDPAGE = 'ENDPAGE'
  ENTRY_TYPES = [ENTRY_MENU, ENTRY_ITEM, ENTRY_ENDPAGE]

  INTEGER_FIELDS = ['prev', 'next']
  MULTI_FIELDS = ['items']

  validates :entry_type, :inclusion => ENTRY_TYPES.map{|e| e.to_s}

  validates_each :json_blob do |record, attr, value|
	 j = ActiveSupport::JSON

	 begin
		 v = j.decode(value)

		 #make sure that the title isn't blank
		 title = ''
		 title = v['title'] if v.include? 'title'

		 if title.nil? || title == '' || !title
		 	record.errors.add 'Title', "cannot be blank"
		 end

		 v = v.to_s
    rescue
		 record.errors.add attr, "must be valid JSON"
	 end
  end

  before_validation do
  	 self.json_blob = '{}' if self.json_blob == ''
  end

  after_validation do
	 j = ActiveSupport::JSON

	 v = j.decode(self.json_blob)

	 v['items[]'] = '' unless v.include? 'items[]'

	 self.json_blob = j.encode v
  end
 
  def summary
     "#{id}: #{title} (#{entry_type})"
  end   

  def id_title
     "#{id}: #{title}"
  end   
  
  def title
	  getParamFromJSON('title')
  end

  def prev
     getParamFromJSON('prev').to_i
  end   

  def next
     getParamFromJSON('next').to_i
  end                         

  def data
	  getParamFromJSON('data')
  end   

  def items
	  getParamFromJSON('items[]').split(",")
  end   

  # we can just assume it's valid here, b/c
  # validation is done on save
  def getParamFromJSON(name) 
	 j = ActiveSupport::JSON

	 blob = self.json_blob || '{}'

    v = j.decode(blob)

	 return v[name] if v.include?(name) && !v[name].nil?
	 ''
  end  
end

                                       
