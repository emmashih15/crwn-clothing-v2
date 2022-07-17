import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector';

import {
    CategoryContainer,
    CategoroyTitle,
} from './category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoroyTitle>{category.toUpperCase()}</CategoroyTitle>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            )}
        </Fragment>
    );
};

export default Category;