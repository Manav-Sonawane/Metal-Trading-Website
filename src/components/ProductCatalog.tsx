import { useState, useMemo } from 'react';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { Filter, X } from 'lucide-react';

export function ProductCatalog() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedThickness, setSelectedThickness] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Extract unique values for filters
  const types = useMemo(() => [...new Set(products.map(p => p.type))], []);
  const grades = useMemo(() => [...new Set(products.map(p => p.grade))], []);
  const thicknessRanges = useMemo(() => [...new Set(products.map(p => p.thickness))], []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
      const gradeMatch = selectedGrades.length === 0 || selectedGrades.includes(product.grade);
      const thicknessMatch = selectedThickness.length === 0 || selectedThickness.includes(product.thickness);
      return typeMatch && gradeMatch && thicknessMatch;
    });
  }, [selectedTypes, selectedGrades, selectedThickness]);

  const toggleFilter = (value: string, selected: string[], setter: (values: string[]) => void) => {
    if (selected.includes(value)) {
      setter(selected.filter(v => v !== value));
    } else {
      setter([...selected, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedTypes([]);
    setSelectedGrades([]);
    setSelectedThickness([]);
  };

  const hasActiveFilters = selectedTypes.length > 0 || selectedGrades.length > 0 || selectedThickness.length > 0;

  const FilterSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-slate-900">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-blue-600 hover:text-blue-700"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Type Filter */}
      <div>
        <Label className="text-slate-900 mb-3 block">Type</Label>
        <div className="space-y-2">
          {types.map(type => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
              />
              <label
                htmlFor={`type-${type}`}
                className="text-sm text-slate-700 cursor-pointer"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Grade Filter */}
      <div>
        <Label className="text-slate-900 mb-3 block">Grade</Label>
        <div className="space-y-2">
          {grades.map(grade => (
            <div key={grade} className="flex items-center space-x-2">
              <Checkbox
                id={`grade-${grade}`}
                checked={selectedGrades.includes(grade)}
                onCheckedChange={() => toggleFilter(grade, selectedGrades, setSelectedGrades)}
              />
              <label
                htmlFor={`grade-${grade}`}
                className="text-sm text-slate-700 cursor-pointer"
              >
                {grade}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Thickness Filter */}
      <div>
        <Label className="text-slate-900 mb-3 block">Thickness</Label>
        <div className="space-y-2">
          {thicknessRanges.map(thickness => (
            <div key={thickness} className="flex items-center space-x-2">
              <Checkbox
                id={`thickness-${thickness}`}
                checked={selectedThickness.includes(thickness)}
                onCheckedChange={() => toggleFilter(thickness, selectedThickness, setSelectedThickness)}
              />
              <label
                htmlFor={`thickness-${thickness}`}
                className="text-sm text-slate-700 cursor-pointer"
              >
                {thickness}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl mb-2">Product Catalog</h1>
          <p className="text-blue-100">
            Browse our comprehensive range of premium steel products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <FilterSection />
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <Button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                variant="outline"
                className="w-full"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters {hasActiveFilters && `(${selectedTypes.length + selectedGrades.length + selectedThickness.length})`}
              </Button>
            </div>

            {/* Mobile Filters Panel */}
            {mobileFiltersOpen && (
              <Card className="lg:hidden mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-900">Filters</h3>
                    <button onClick={() => setMobileFiltersOpen(false)}>
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <FilterSection />
                </CardContent>
              </Card>
            )}

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-slate-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onLearnMore={() => alert(`Product details for ${product.name} would be displayed here`)}
                  />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-slate-600 mb-4">No products match your current filters</p>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear Filters
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
