"use client";
import { useState } from "react";
import { asset } from "../lib/site";
export function ProfilePhoto() {
    const [loaded, setLoaded] = useState(true);
    return (
        <div className="profile-photo">
            {loaded ? (
                <img
                    src={asset("/profile.jpeg")}
                    alt="Kai DeVito"
                    onError={() => setLoaded(false)}
                />
            ) : (
                <div
                    className="profile-placeholder"
                    aria-label="Photo placeholder"
                >
                    KD<span>Add public/profile.jpeg</span>
                </div>
            )}
        </div>
    );
}
