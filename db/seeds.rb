["Distrito arcos", "Callao y Viamonte", "Paraguay y Riobamba"].each do |name|
  Pub.first_or_create(
    name: name
  )
end

{
  HappyHourPatagoniaArcos: 1
}.each do |key, value|
  Hashtag.first_or_create(
    name: key,
    pub: Pub.find(value)
  )
end