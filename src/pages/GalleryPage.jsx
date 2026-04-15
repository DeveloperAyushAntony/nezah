import React from 'react';
import TransformationGallery from '../components/TransformationGallery';

const GalleryPage = ({ isDark }) => {
    return (
        <div className="pt-20">
            <TransformationGallery isDark={isDark} />
        </div>
    );
};

export default GalleryPage;
