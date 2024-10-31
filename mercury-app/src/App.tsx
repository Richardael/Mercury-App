import './App.css';
import { 
  MdSettings, MdAccountCircle, MdOutlineStar, MdFilterList, MdDashboard, 
  MdGroup, MdExpandMore, MdExpandLess, MdOutlineDashboard, MdPlusOne, 
  MdAdd, MdMoreVert, MdDelete 
} from 'react-icons/md';
import { useState } from 'react';

function HeaderGeneral() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-800 p-3 flex justify-between items-center text-white">
      <div className="flex items-center gap-4">
        <h1 className="text-xl flex gap-2 items-center">
          <MdOutlineDashboard className="text-2xl" />
          Mercury App
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-400">
          Crear Tablero
        </button>
      </div>

      <div className="flex items-center gap-4">
        <MdSettings className="text-2xl" />

        <div className="relative">
          <button onClick={toggleMenu} className="flex items-center gap-2">
            <MdAccountCircle className="text-2xl" />
            <p>Usuario</p>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
              <button 
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
                onClick={() => console.log('Cerrar Sesión')}
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  const [tableros, setTableros] = useState(["Tablero Trickstar", "Tablero Fleur", "Tablero Gandora"]);
  const [showTableros, setShowTableros] = useState(false);

  const toggleTableros = () => setShowTableros(!showTableros);

  return (
    <aside className="bg-gray-700 text-white w-64 p-4 flex flex-col justify-between h-full">
      <div>
        <button className="w-full text-left p-2 bg-gray-600 rounded-lg my-2 flex items-center gap-2 hover:bg-gray-500">
          <MdDashboard className="text-2xl" />
          Tableros
        </button>
        <button className="w-full text-left p-2 bg-gray-600 rounded-lg my-2 flex items-center gap-2 hover:bg-gray-500">
          <MdGroup className="text-2xl" />
          Miembros
        </button>
      </div>
      <div>
        <button onClick={toggleTableros} className="w-full p-2 bg-blue-500 rounded-lg text-left my-2 flex items-center justify-between hover:bg-blue-400">
          Mis Tableros
          {showTableros ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        {showTableros && (
          <ul className="mt-2">
            {tableros.map((tablero, index) => (
              <li key={index} className="p-2 bg-gray-600 rounded-lg my-1 hover:bg-gray-500">{tablero}</li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}

function HeaderDashboard() {
  return (
    <header className="bg-black/60 p-3 flex items-center gap-2 justify-between">
      <div className="flex-1 flex items-center gap-2">
        <h1 className="text-white text-xl mr-12">Tablero Shiranui Shido</h1>
        <MdOutlineStar className="text-white text-3xl" />
        <p className="text-white text-xl">Favorito</p>
      </div>
      <div className="flex-1 flex items-center gap-2">
        <button className="bg-white text-black px-4 py-2 flex items-center gap-2 rounded-sm hover:bg-gray-200">
          <MdFilterList />
          Filtros
        </button>
        <input type="text" placeholder="Buscar Shido" className="bg-white px-4 py-2 rounded-lg w-full" />
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header General */}
      <HeaderGeneral />

      <div className="flex flex-1">
        {/* Sidebar General */}
        <Sidebar />

        <main className="flex-1">
          {/* Dashboard */}
          <div className="imagenFondo">
            {/* Header del Dashboard */}
            <HeaderDashboard />

            {/* Content */}
            <div className="grid grid-cols-5 gap-8 m-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <div 
                  key={index} 
                  className="col-span-1 bg-gray-900 p-4 rounded-2xl w-full pb-6 hover:scale-95 transition duration-200"
                >
                  {/* Encabezado de la lista */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg text-white">Titulo</h2>
                    <div className="flex gap-2">
                      <MdMoreVert className="text-white cursor-pointer hover:text-gray-400" />
                      <MdDelete className="text-white cursor-pointer hover:text-red-400" />
                    </div>
                  </div>
                  {/* Carta */}
                  <div className="bg-gray-800 p-2 rounded-lg mt-4">
                    <h3 className="text-sm text-gray-400">Card</h3>
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg mt-4">
                    <h3 className="text-sm text-gray-400">Card</h3>
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg mt-4">
                    <h3 className="text-sm text-gray-400">Card</h3>
                  </div>
                  {/* Añadir Tarjeta Boton */}
                  <button className="bg-gray-800 p-2 rounded-lg mt-4 w-full flex items-center justify-center gap-2 hover:bg-gray-700">
                    <MdAdd className="text-white text-xl" />
                    Añadir Tarjeta
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
