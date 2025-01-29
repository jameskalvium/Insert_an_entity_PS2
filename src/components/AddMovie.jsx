import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Movie Data:', formData);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-lg mb-4">Add Movie</h2>
      <form onSubmit={handleSubmit} className="space-x-3">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
          placeholder="Director"
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>

        <input
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          placeholder="Release Year"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="url"
          name="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
          placeholder="Poster URL"
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="synopsis"
          value={formData.synopsis}
          onChange={handleChange}
          placeholder="Synopsis"
          className="w-full p-2 border rounded h-24"
          required
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;