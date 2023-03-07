import React, { useEffect, useState } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogGridAll from '../components/blog/bloggrid/BlogGridAll'
import Paginations from '../components/blog/Paginations'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'
import { supabase } from '../supabase';
import { useParams, useRouteMatch } from 'react-router-dom'

export default function BlogGrid() {
    const [num, setNum] = useState(1);
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getBlogs();
    }, []);

    async function getBlogs() {
        try {
            let { data: Blogs } = await supabase
            .from('Blogs')
            .select('*')
            setResult(Blogs);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main className="blog-grid">
            <Navbar2 />
            <Breadcrumb title="Blog Grid" />
            <section className="blog-area padding-top-140px padding-bottom-120px">
                <div className="container">
                    <div className="row">
                    <BlogGridAll blogs={result.slice((num - 1) * 6, num * 6)} />
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Paginations blogs={result.length} num={num} set={setNum} />
                        </div>
                    </div>
                </div>
            </section>
            <ScrollTop />
            <Footer />
        </main>
    )
}
