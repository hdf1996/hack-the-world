[
  {
    name: "Distrito arcos", 
  },
  {
    name: "Callao y Viamonte"
  }, 
  {
    name: "Paraguay y Riobamba" 
  }
].each do |params|
  Pub.first_or_create(params)
end

{
  HappyHourPatagoniaArcos: 1
}.each do |key, value|
  Hashtag.first_or_create(
    name: key,
    pub: Pub.find(value)
  )
end