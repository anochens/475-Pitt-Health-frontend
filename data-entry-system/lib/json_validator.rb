class JsonValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)  
		res = true;

		begin  
			JSON.parse(value)  
		rescue Exception => e  
			res = false  
		end       

		record.errors[attribute] << "Must be valid JSON" if !res
  end  
end                     
