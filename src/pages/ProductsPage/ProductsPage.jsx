import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import products from '../../data/products';
import './ProductsPage.css';

const groups = [
  { key: 'brand', title: 'Marca', inputType: 'checkbox' },
  { key: 'category', title: 'Categoria', inputType: 'checkbox' },
  { key: 'gender', title: 'Gênero', inputType: 'checkbox' },
  { key: 'state', title: 'Estado', inputType: 'radio' },
];

const optionsFor = (key) =>
  [...new Set(products.map((p) => p[key]))].sort().map((text) => ({ text }));

const emptyFilters = { brand: [], category: [], gender: [], state: [] };

function ProductsPage() {
  const [params] = useSearchParams();
  const term = (params.get('filter') || '').toLowerCase();

  const [selected, setSelected] = useState(emptyFilters);
  const [sort, setSort] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (group, value) => {
    setSelected((prev) => {
      if (group.inputType === 'radio') {
        return { ...prev, [group.key]: [value] };
      }
      const current = prev[group.key];
      return {
        ...prev,
        [group.key]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(term))
    .filter((p) =>
      groups.every(
        (g) => selected[g.key].length === 0 || selected[g.key].includes(p[g.key])
      )
    )
    .sort((a, b) => {
      if (sort === 'menor') return a.priceDiscount - b.priceDiscount;
      if (sort === 'maior') return b.priceDiscount - a.priceDiscount;
      return 0;
    });

  const title = term
    ? `Resultados para "${params.get('filter')}" - ${filtered.length} produtos`
    : `${filtered.length} produtos`;

  return (
    <Layout>
      <main className="products-page">
        <div className="products-toolbar">
          <button className="filter-toggle" onClick={() => setOpen(!open)}>
            Filtrar
          </button>

          <label className="sort">
            Ordenar por:
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">Mais relevantes</option>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </label>
        </div>

        <div className="products-layout">
          <aside className={`filters ${open ? 'open' : ''}`}>
            <div className="filters-head">
              <h2>Filtrar por</h2>
              <button onClick={() => setSelected(emptyFilters)}>Limpar</button>
            </div>

            {groups.map((group) => (
              <FilterGroup
                key={group.key}
                title={group.title}
                inputType={group.inputType}
                options={optionsFor(group.key)}
                selected={selected[group.key]}
                onChange={(value) => handleChange(group, value)}
              />
            ))}
          </aside>

          <Section title={title} titleAlign="left">
            {filtered.length === 0 ? (
              <p>Nenhum produto encontrado.</p>
            ) : (
              <ProductListing products={filtered} columns={3} />
            )}
          </Section>
        </div>
      </main>
    </Layout>
  );
}

export default ProductsPage;