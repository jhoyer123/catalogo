export const Mapa = () => {
  return (
    <div className="w-full p-5 bg-gray-900 font-ubuntu text-white rounded-2xl shadow-lg mt-6 lg:mt-0 max-w-[700px]">
      <h2 className="text-center text-2xl mb-4">Ubicación del negocio</h2>
      <p>Cómo llegar</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.637710263899!2d-68.14855312393547!3d-16.493872440569426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8ae3a97a23%3A0xdf1338b48d8ed634!2sUyustus%2C%20La%20Paz!5e0!3m2!1ses-419!2sbo!4v1762729634599!5m2!1ses-419!2sbo"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
