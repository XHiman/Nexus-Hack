import './styles/Navbar.css'

function Navbar() {
    return (
        <div className="Nav">
            <div class="scroll-navigation">
                 <button class="anchor-nav anchor-nav--prev"><span class="anchor-nav__title">prev</span></button>
                    <a class="anchor-link" href="#scroll-block-0"><span class="anchor-link__title">0</span></a>
                    
                    <a class="anchor-link" href="#scroll-block-1"><span class="anchor-link__title">1</span></a>
                    
                    <a class="anchor-link" href="#scroll-block-2"><span class="anchor-link__title">2</span></a>
                    
                    <a class="anchor-link" href="#scroll-block-3"><span class="anchor-link__title">3</span></a>
                    
                    <a class="anchor-link anchor-link--active" href="#scroll-block-4"><span class="anchor-link__title">4</span></a>
                
                 <button class="anchor-nav anchor-nav--next"><span class="anchor-nav__title">next</span></button>
            </div>
        </div>
    )
}

export default Navbar