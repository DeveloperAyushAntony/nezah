import React from 'react';
import Collections from '../components/Collections';
import FabricAtelier from '../components/FabricAtelier';

const CollectionsPage = ({ isDark }) => {
    return (
        <div className="pt-20">
            <Collections isDark={isDark} />
            <FabricAtelier isDark={isDark} />
        </div>
    );
};

export default CollectionsPage;
