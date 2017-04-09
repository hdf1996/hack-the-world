[{
    name: "Distrito Arcos",
    direction: "Paraguay 4979 - Centro Comercial Distrito",
    telephone: "",
    latitude: "-34.5811051",
    longitude: "-58.4306089"
  },
  {
    name: "Callao y Viamonte",
    direction: "Callao 650",
    telephone: "54 911 2091 3982",
    latitude: "-34.6014216",
    longitude: "-58.3927544"
  },
  {
    name: "Paraguay y Riobamba",
    direction: "Paraguay 1900",
    telephone: "54 911 2091 9641",
    latitude: "-34.5987254",
    longitude: "-58.3950685"
  }
].each do |params|
  Pub.find_or_create_by(params).errors.inspect
end

{
  HappyHourPatagoniaArcos: 1,
  HappyHourPatagoniaCallao: 2,
  HappyHourPatagoniaRiobamba: 3
}.each do |key, value|
  Hashtag.find_or_create_by(
    name: key,
    pub: Pub.find(value),
    goal: 500
  )
end