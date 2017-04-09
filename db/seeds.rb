[{
    name: "Distrito Arcos",
    slug: :arcos,
    picture: "http://www.cervezapatagonia.com.ar/img/Mobile/Refugios/distritoarcos.jpg"
    direction: "Paraguay 4979 - Centro Comercial Distrito",
    telephone: "",
    latitude: "-34.5811051",
    longitude: "-58.4306089"
  },
  {
    name: "Callao y Viamonte",
    slug: :callao,
    picture: "http://www.cervezapatagonia.com.ar/img/Mobile/Refugios/callaoyviamonte.jpg"
    direction: "Callao 650",
    telephone: "54 911 2091 3982",
    latitude: "-34.6014216",
    longitude: "-58.3927544"
  },
  {
    name: "Paraguay y Riobamba",
    picture: "http://www.cervezapatagonia.com.ar/img/Mobile/Refugios/paraguayyriobamba.jpg"
    slug: :riobamba,
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