'use client'
import "../style/Spinner.css";
export default function loading() {
    return (
        <p className="text-center">
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
            <p className="text-xl text-sky-800 text-center">Espere....</p>
        </p>
    );
}
